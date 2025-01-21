/* import { RouterProvider } from 'react-router-dom';
import { Router } from './modules/core/routes'; */
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import InfiniteScroll from "react-infinite-scroll-component";

import './styles.scss';

//const App = () => <RouterProvider router={Router} />;
const Item = ({item, add}) => {
    return (
        <div style={{border: 'solid 1px blue', width: '200px', height: '200px', display: 'flex', flexDirection: 'column'}}>
            <div>
                {item.productName}
            </div>
            <div>
                {item.price}
            </div>
            <div>
                stock: {item.stock}
            </div>
            <button onClick={() => add(item.id, item.stock - 1)}>agregar</button>
        </div>
    );
}
const fetchProducts = async ({pageParam}: { pageParam: number}) => {
    const res = await fetch(`http://localhost:3000/grocery?_start=${pageParam}&_limit=20`)
    return res.json()
}
 
// lista normal: https://tanstack.com/query/latest/docs/framework/react/guides/updates-from-mutation-responses
const useUpdate = () => {
    const queryClient = useQueryClient();
//https://github.com/TanStack/query/discussions/3360#discussioncomment-5921065
    const mutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: (data) => {
            console.log('ok patch succes', data)
            queryClient.setQueryData(['products'], oldData => {
                const newData = oldData?.pages.map(page => 
                    page.map(item => {
                        return (item.id === data.id) ? data : item;
                    })
                );
                return {
                    ...oldData,
                    pages: newData,
                }
            })
        }
    });
    return mutation;
}

const updateProduct =  async ({id, stock}) => {
    const res = await fetch(`http://localhost:3000/grocery/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stock })
    });
    const data = await res.json();
    console.log('aapi', data);
    return data;
}

const App = () => {
    const updateProduct = useUpdate();
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
      } = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        initialPageParam: 0,
        getNextPageParam: (_, pages) => pages.length*20,
      })
    
      const update = (id: string, stock: number) => {
        console.log('id', id);
        updateProduct.mutate({id, stock});
      }
      const add = (id: string) => {
        console.log(id);
      }

    const list = data?.pages.flat() ?? [];
    const hasMore = list.length < 1000;
    console.log(data)
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '4px'}}>
            <InfiniteScroll
                dataLength={list.length}
                next={() => !isFetchingNextPage && fetchNextPage()}
                hasMore={hasMore}
                loader={<h4>Cargando...</h4>}
                height={600}
            >
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '4px'}}>

                {list.map((item) => (
                        <Item key={item.id} item={item} add={update}/>
                ))}
                </div>
            </InfiniteScroll>
        </div>
    );
}

export default App;
