import { useState, useEffect } from 'react';
import TabContent from './TabContent';
import happyExpression from '/happy.png'

export default function Content(props) {
  const [welcome, setWelcome] = useState(true);
  const [tab, setTab] = useState('About');
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);

  const tabs = [
  {
    name: 'About',
    pages: 2,
  },
  {
    name: 'Experience',
    pages: 2,
  },
  {
    name: 'Projects',
    pages: 3,
  },
  {
    name: 'Links',
    pages: 1,
  }];

  function prevPage() {
    if (page - 1 > 0)
      setPage(page - 1);
    else {
      if (index > 0)
        switchTab(tabs[index - 1].name, tabs[index - 1].pages);
    }
  }

  function nextPage() {
    if (page < tabs[index].pages)
      setPage(page + 1);
    else {
      if (index < 3)
        switchTab(tabs[index + 1].name, 1);
    }
  }

  function handleStart() {
    props.setStartClicked(true);
  }

  function switchTab(tab, page) {
    setTab(tab);
    setPage(page);
    switch (tab) {
      case 'About':
        setIndex(0)
        break;
      case 'Experience':
        setIndex(1)
        break;
      case 'Projects':
        setIndex(2)
        break;
      case 'Links':
        setIndex(3)
        break;
    }
  }

  function handleReset() {
    setWelcome(false);
    setTab('About');
    setPage(1);
    setIndex(0);
    props.setIntroFinished(false);
    props.setStartClicked(false);
    props.setDoneZooming(false);
    props.setReset(true);
  }

  if (!props.startClicked && !props.doneZooming) {

    return (
      <>
        <p id="startText">Start</p>
        <img id="start-button" src={happyExpression} onClick={handleStart} />
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
                <a id="reset-button" onClick={() => handleReset()}>Reset</a>
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