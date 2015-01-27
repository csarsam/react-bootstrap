var MyModal = React.createClass({
  render: function() {
    return (
        <Modal {...this.props} title="Modal title" sticky={true}>
          <div className="modal-body">
            <p>This modal is sticky. It won't close if you click outside it.</p>
          </div>
          <div className="modal-footer">
            <Button onClick={this.props.onRequestHide}>Close</Button>
          </div>
        </Modal>
      );
  }
});

var overlayTriggerInstance = (
    <ModalTrigger modal={<MyModal />}>
      <Button bsStyle="primary">Launch demo modal</Button>
    </ModalTrigger>
  );

React.render(overlayTriggerInstance, mountNode);