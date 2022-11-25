import style from "./MainHeader.module.css";
import Link from "next/link";

function MainHeader() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={style.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
