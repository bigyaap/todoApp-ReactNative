/** @format */

import HomeScreen from "./src/screens/Home";

export default function App() {
  //   const [list, setList] = useState<any[]>([]);
  //   const [title, onChangeTitle] = useState("");

  //   //   Use useEffect to fetch data and update state when the component mounts
  //   async function fetchData() {
  //     try {
  //       const allList = await fetchUser(); // Assuming fetchUser returns a promise
  //       if (allList) {
  //         // Check if allList is not undefined before updating the state
  //         setList(allList.data); // Assuming allList is an AxiosResponse object with a 'data' property
  //       }
  //     } catch (error) {
  //       // Handle errors if the fetchUser function encounters any
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   const handleAdd = async () => {
  //     try {
  //       onChangeTitle("");
  //       setList([{ id: Math.random(), title, fade: true }, ...list]);
  //       const response = await createTodo(title);
  //       if (response && response.data !== null) {
  //         fetchData();
  //       }
  //     } catch (error) {
  //       console.error("Error deleting todo:", error); // Handle errors if the deleteTodo function encounters any
  //     }
  //   };
  //   const handleDelete = async (id: number) => {
  //     try {
  //       const response = await deleteTodo(id);
  //       if (response && response.data !== null) {
  //         fetchData();
  //       }
  //     } catch (error) {
  //       console.error("Error deleting todo:", error); // Handle errors if the deleteTodo function encounters any
  //     }
  //   };

  //   const taskItems = [
  //     {
  //       title: "11",
  //       id: 1,
  //       fade: false,
  //     },
  //     {
  //       title: "22",
  //       id: 2,
  //       fade: false,
  //     },
  //   ];
  return <HomeScreen />;
}
