import { MenuItem, styled } from "@mui/material";

const HeaderButtonDropDownItem = styled(MenuItem)({
  fontSize: 13,
  padding: "10px 20px",
  margin: "0px 5px",
  borderRadius: "2px",
  position: "relative",
  transition: "all 150ms linear",
  display: "block",
  clear: "both",
  fontWeight: 400,
  height: "fit-content",
  color: "#333",
  whiteSpace: "nowrap",
  minHeight: "unset",

  "&:hover,&:focus": {
    backgroundColor: "#27ae60",
    color: "#FFFFFF",
    boxShadow:
      "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)",
  },
});

export default HeaderButtonDropDownItem;
