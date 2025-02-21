import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const schema = yup
    .object({
        npub: yup.string().required("Username is required"),
        month: yup.number().required("Month"),
    })
    .required();

const useCheckAvailability = () => {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: { npub: string }) => {
        console.log(data);
        try {
            setLoading(true);
            // const res = await usernameService.checkAvailability(data.username);
            // navigate(
            //     `/set-username?username${data.username}&status=${res.data.data}`,
            // );
        } catch (error) {
            console.log(error);
            //  TODO : add toast
        } finally {
            setLoading(false);
        }
    };

    return {
        register,
        onSubmit,
        errors,
        getValues,
        setValue,
        handleSubmit: handleSubmit(onSubmit),
        loading,
    };
};

export default useCheckAvailability;
