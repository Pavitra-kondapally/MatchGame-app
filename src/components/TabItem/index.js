import './index.css'

const TabItem = props => {
  const {tabDetails, makingTabActive, isActive} = props
  const {displayText, tabId} = tabDetails
  const tabClassName = isActive ? 'active-tab' : 'inactive-tab'
  const onSelectingTab = () => {
    makingTabActive(tabId)
  }
  return (
    <li className="tab-class">
      <button className={tabClassName} type="button" onClick={onSelectingTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
