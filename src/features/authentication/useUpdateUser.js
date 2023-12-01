import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (data) => {
      if (data && data.user) {
        toast.success("User account successfully updated");
        //   queryClient.setQueryData("user", data.user);
        queryClient.invalidateQueries({ queryKey: ["user"] });
      } else {
        toast.error("Unexpected response from the server");
      }
    },
  });

  return { updateUser, isUpdating };
}
