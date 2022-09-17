import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";


const Home = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://localhost:4000/api/getKey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Amir Kumar",
            description: "RazorPay",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Amir Kumar",
                email: "Amir.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box>

            <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

                <Card amount={50000} img={"https://www.gizmochina.com/wp-content/uploads/2022/05/iPhone-14-Pro-Purple-Vertical-768x474.jpg"} checkoutHandler={checkoutHandler} />
                <Card amount={30000} img={"data:image/jpeg;base64,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"} checkoutHandler={checkoutHandler} />

            </Stack>
        </Box>
    )
}

export default Home