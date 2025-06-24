import './index.css'

const AppItem = ({appDetails}) => {
  const {appName, imageUrl} = appDetails
  return (
    <li className="app-li">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-title"> {appName} </p>
    </li>
  )
}

export default AppItem
