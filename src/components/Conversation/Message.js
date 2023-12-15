import React from "react";
import { Box, Stack } from "@mui/material";
// custom component
import {
  TextMsg,
  Timeline,
  MediaMsg,
  ReplyMsg,
  LinkMsg,
  DocMsg,
} from "./MsgTypes";

// data const
import { Chat_History } from "../../data";

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // Timeline
              return <Timeline el={el} menu={menu} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  // img msg
                  return <MediaMsg el={el} menu={menu} />;
                case "doc":
                  // Doc msg
                  return <DocMsg el={el} menu={menu} />;
                case "link":
                  // Link msg
                  return <LinkMsg el={el} menu={menu} />;
                case "reply":
                  // Reply msg
                  return <ReplyMsg el={el} menu={menu} />;
                default:
                  // Text msg
                  return <TextMsg el={el} menu={menu} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
