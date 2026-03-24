function ReactBitsPlaceholder({ componentName, description }) {
  return (
    <div className="reactbits-note">
      <strong>ReactBits slot:</strong> Replace this with the <code>{componentName}</code>{' '}
      component copied from reactbits.dev.
      <div>{description}</div>
    </div>
  )
}

export default ReactBitsPlaceholder

