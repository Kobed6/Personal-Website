import { useState, useEffect } from 'react';
import TabContent from './TabContent';

export default function Content(props) {
  const [welcome, setWelcome] = useState(true);
  const [tab, setTab] = useState('About');
  const [page, setPage] = useState(1);

  const tabs = ['About', 'Experience', 'Projects', 'Links'];
  const tabPages = { 'About': 2, 'Experience': 2, 'Projects': 3, 'Links': 1 };

  function prevPage() {
    if (page - 1 > 0)
      setPage(page - 1);
  }

  function nextPage() {
    if (page < tabPages[tab])
      setPage(page + 1);
    // else
    //   switchTab()
  }

  function handleStart() {
    props.setStartClicked(true);
  }

  function switchTab(tab, page) {
    setTab(tab);
    setPage(page);
  }

  if (!props.startClicked && !props.doneZooming) {

    return (
      <>
        <p id="startText">Start</p>
        <img id="start-button" src="/Personal-Website/happy.png" onClick={handleStart} />
      </>
    )
  }

  else if (props.doneZooming) {
    setTimeout(() => setWelcome(false), 2000);

    return (
      <>
        {welcome && <p id='welcomeText'>Welcome</p>}
        {!welcome &&
          <div className='main-container'>
            <nav>
              <span id="reset-container">
                <a id="reset-button">Reset</a>
              </span>
              <span id="nav-buttons-container">
                <a onClick={() => switchTab('About', 1)}>About</a>
                <a onClick={() => switchTab('Experience', 1)}>Work Experience</a>
                <a onClick={() => switchTab('Projects', 1)}>Projects</a>
                <a onClick={() => switchTab('Links', 1)}>Links</a>
              </span>
            </nav>
            <div className='content-container'>
              <TabContent tab={tab} page={page} />
              <span className='pagination-container'>
                <div id="prev-button" className="pagination-button" onClick={prevPage}>&lt;&lt;</div>
                <div id="next-button" className="pagination-button" onClick={nextPage}>&gt;&gt;</div>
              </span>
            </div>
          </div>
        }
      </>
    )
  }
}