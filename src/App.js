import "./Sidebar.css";
import { SidebarData } from "./sidebarData";

function App() {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="sidebar__row"
              id={window.location.pathname == val.link && "sidebar--active"}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div className="sidebar__icon">{val.icon}</div>
              <div className="sidebar__title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
