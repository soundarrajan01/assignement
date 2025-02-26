import { BellFilled, SearchOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";
import React, { useState } from "react";
import styles from "./CommonInput.module.css";
import { Button, Input } from "antd";
export default function SearchbarHeader() {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  return (
    <>
      <div className={styles.searchHeader}>
        <div className={styles.searchContainer}>
          <Input
            placeholder="Search user by their name"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={handleSearch}
            className={styles.searchInput}
          />
          <Button type="primary" className={styles.searchButton}>
            Search
          </Button>
        </div>
        <div className={styles.profileoutline}>
          <BellFilled style={{ color: "white" }} />
          <img
            src={"https://i.pravatar.cc/40?img=2"}
            alt="avatar"
            className={styles.avatar}
          />
        </div>
      </div>
      <div className={styles.headerLine}></div>
    </>
  );
}
