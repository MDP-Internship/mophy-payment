import { Popover } from "@material-ui/core";
import styled from "styled-components";

const PopoverComponent = (props) => {
  const open = Boolean(props.anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={
        props.anchorOrigin
          ? props.anchorOrigin
          : {
              vertical: "bottom",
              horizontal: "center",
            }
      }
      transformOrigin={
        props.transformOrigin
          ? props.transformOrigin
          : {
              vertical: "top",
              horizontal: "center",
            }
      }
      PaperProps={{
        style: {
          marginTop: "10px",
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "visible",
        },
      }}
    >
      <Arrow arrow={props.arrow} />
      {props.children}
    </Popover>
  );
};

export default PopoverComponent;

const Arrow = styled.div`
  position: absolute;
  height: 12px;
  width: 12px;
  background: white;
  top: -6px;
  transform: rotate(45deg);
  left: ${(props) =>
    props.arrow === "right" ? "calc(100% - 15px)" : "calc(50% - 6px)"};
`;
