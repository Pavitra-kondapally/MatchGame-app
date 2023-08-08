import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickingThumbnail} = props
  const {thumbnailUrl, id} = imageDetails
  const onClickingThumbnail = () => {
    clickingThumbnail(id)
  }
  return (
    <li className="thumbnail-item">
      <img
        src={thumbnailUrl}
        className="thumbnail-image"
        alt="thumbnail"
        onClick={onClickingThumbnail}
      />
    </li>
  )
}

export default ThumbnailItem
