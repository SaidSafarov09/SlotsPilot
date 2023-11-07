import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { SearchImg } from "./img/SearchImg";
import InputBase from "@mui/material/InputBase";
import styles from "./header.module.scss";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",

      "&:focus": {
        width: "100%",
      },
    },
  },
}));

export const SearchBar = () => {
  return (
    <Search className={styles.search}>
      <SearchIconWrapper>
        <SearchImg />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search for games, providers, casino..."
        inputProps={{ "aria-label": "search" }}
        className={styles.placeholder}
      />
    </Search>
  );
};
