import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User } from "../interface/interface";
import { baseUrl } from "./constant";

export function Home() {
  const [user, setUser] = useState<User[]>([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    let response = await axios.request({
      url: baseUrl,
      method: "get"
    });
    if (response.status === 200) {
      setUser(response.data);
    }
  };

  const onGotoDetail = (id: number) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    console.log("!!!!!!!!!!!!!!!!!!");
    fetchData().then();
  }, []);

  return (
    <div className="App">
      <h1>This is list posted</h1>
      {user.map((item) => (
        <div key={item.id} onClick={() => onGotoDetail(item.id)}>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
