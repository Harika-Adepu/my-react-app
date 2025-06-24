import './index.css'

const TabItem = ({tabItem, isActive, onClickTab}) => {
  const {tabId, displayText} = tabItem
  const tabClass = isActive ? 'active-tab-name' : 'tab-name'
  const onClickTabItem = () => {
    onClickTab(tabId)
  }
  return (
    <li>
      <button onClick={onClickTabItem} className={`tab ${tabClass}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
