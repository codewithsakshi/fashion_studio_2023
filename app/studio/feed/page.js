"use client"
import Posts from "@/components/feed/posts";
import { Box } from "@material-ui/core";
export default function Feed() {
    return (
    <Box display={"flex"} justifyContent={"center"}>
      <Posts/>
    </Box>
    )
}