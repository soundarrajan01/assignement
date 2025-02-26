import React, { useState } from "react";
import { Table, Input, Button, Rate } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styles from "./usermanagement.module.css";
import SearchbarHeader from "../../Component/SearchbarHeader";

const UserManagement = () => {
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className={styles.userInfo}>
          <img src={record.avatar} alt="avatar" className={styles.avatar} />
          <div>
            <strong>{text}</strong>
            <p className={styles.email}>{record.email}</p>
            <p className={styles.phone}>{record.phone}</p>
          </div>
        </div>
      ),
    },
    {
      title: "User Deal",
      dataIndex: "deal",
      key: "deal",
      render: (deal) => (
        <>
          <p className={styles.sold}>{deal.sold} Sold</p>
          <p className={styles.bought}>{deal.bought} Bought</p>
        </>
      ),
    },
    {
      title: "Block / Unblock",
      dataIndex: "status",
      key: "status",
      render: (status) =>
        status === "Blocked" ? (
          <Button className={styles.unblockButton}>Unblock</Button>
        ) : (
          <Button className={styles.blockButton}>Block</Button>
        ),
    },
    {
      title: "Ratings",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => <Rate value={rating} disabled />,
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
      deal: { sold: 2, bought: 1 },
      status: "Blocked",
      rating: 3,
    },
    {
      key: "2",
      name: "Taliah Cotton",
      email: "taliah.cotton@gmail.com",
      phone: "+91-987654321",
      avatar: "https://i.pravatar.cc/40?img=2",
      deal: { sold: 0, bought: 5 },
      status: "Active",
      rating: 5,
    },
  ];

  return (
    <div className={styles.container}>
      <SearchbarHeader />
      <div className={styles.tableContainer}>
        <h2 className={styles.title}>List of Users</h2>
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

export default UserManagement;
