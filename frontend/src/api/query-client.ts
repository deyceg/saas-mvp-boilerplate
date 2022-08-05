import toast from "react-hot-toast";
import { MutationCache, QueryCache, QueryClient } from "react-query";
import { queryError, mutationError } from "constants/errors";
import { createSystemToast } from "components/overlays/notifications/Toast";

export const queryClient = new QueryClient({
    /**
     * Only toast if the query fails and there is no data in the cache.
     */
    queryCache: new QueryCache({
        onError: (error: Error, query) => {
            if (query.state.data !== undefined) {
              toast(createSystemToast(queryError))
            }
        },
    }),
    /**
     * Toast every time the user takes an action.
     */
    mutationCache: new MutationCache({
        onError: (error: Error) => {
            toast(createSystemToast(mutationError))
        },
    })
});