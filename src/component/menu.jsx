import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

function menu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginLeft: "40%" }}>
      <h2>Menu trong ReactJS</h2>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Mở Menu
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Trang chủ</MenuItem>
        <MenuItem onClick={handleClose}>Giới thiệu</MenuItem>
        <MenuItem onClick={handleClose}>Liên hệ</MenuItem>
      </Menu>
    </div>
  );
};

export default menu;
