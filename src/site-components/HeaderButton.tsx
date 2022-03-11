import { ButtonBase, styled } from "@mui/material";

const HeaderButton = styled(ButtonBase)(() => ({
  minWidth: 96,
  padding: "0.9375rem",
  fontWeight: 400,
  fontSize: 13.5,
  textTransform: "uppercase",
  borderRadius: 4,
  "&:hover,&:focus": {
    color: "inherit",
    background: "rgba(200, 200, 200, 0.2)",
  },
}));

export default HeaderButton;
