import React, { useState } from "react";
import { Table, Input, Button, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./usermanagement.module.css";
import SearchbarHeader from "../../Component/SearchbarHeader";
import moment from "moment";

const History = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("Selected Row Keys: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: "User",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className={styles.userInfo}>
          <img src={record.avatar} alt="avatar" className={styles.avatar} />
          <div>
            <strong>{text}</strong>
            {/* <p className={styles.email}>{record.email}</p>
            <p className={styles.phone}>{record.phone}</p> */}
          </div>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "deal",
      key: "deal",
      render: (deal) => (
        <>
          <p>{deal}</p>
          {/* <p className={styles.bought}>{deal.bought} Bought</p> */}
        </>
      ),
    },
    {
      title: "Date & Time",
      dataIndex: "deal",
      key: "deal",
      render: (deal) => (
        <>
          <p>{moment(new Date()).format("YYYY-MM-DD")} Sold</p>
        </>
      ),
    },

    {
      title: "Actions",
      key: "actions",
      render: () => <Button className={styles.actionButton}>More</Button>,
    },
  ];

  const data = [
    {
      key: "1",
      name: "Yeray Rosolios",
      email: "yerayrosolios@gmail.com",
      phone: "+91-987654321",
      avatar: "https://i.pravatar.cc/40?img=1",
      deal: "Log in",
      status: "Blocked",
      rating: 3,
    },
    {
      key: "2",
      name: "Taliah Cotton",
      email: "taliah.cotton@gmail.com",
      phone: "+91-987654321",
      avatar: "https://i.pravatar.cc/40?img=2",
      deal: "Booked Product",
      status: "Active",
      rating: 5,
    },
  ];

  return (
    <div className={styles.container}>
      <SearchbarHeader />
      <div className={styles.tableContainer}>
        <h2 className={styles.headingtitle}>Activity History</h2>
        <p className={styles.headingtitle}>
          View historical data of actions taken within the app
        </p>
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
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data.filter((user) =>
            user.name.toLowerCase().includes(searchText.toLowerCase())
          )}
          pagination={{ pageSize: 5 }}
          className={styles.userTable}
        />
      </div>
    </div>
  );
};

export default History;
