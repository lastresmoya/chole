import React from "react";

function ModalGeneral(props) {
    return (
        <div className="modal fade" id="generalModal" tabIndex="-1" role="dialog" aria-labelledby="generalModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="generalModalLabel">ChOLE <small>Staging System for Cholesteatoma</small> </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut enim quis velit pharetra sollicitudin a nec mauris. Donec pellentesque, est id ullamcorper hendrerit, libero elit placerat massa, vel faucibus sapien magna id nisi. Nullam nec dui ex. Nullam nisl lacus, feugiat a diam ac, scelerisque vestibulum urna. Donec dictum pulvinar nibh, vel ullamcorper leo vulputate ut. Vivamus non purus condimentum, volutpat urna eu, rutrum magna. Nunc aliquam sodales ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Praesent a malesuada massa. Nullam ex ante, vulputate et mollis eget, vehicula sit amet ligula. Praesent eu elementum justo. Integer magna lorem, vulputate vel placerat eu, aliquet nec elit. Suspendisse arcu dolor, lacinia ac lacinia ut, dapibus quis lacus. Aliquam malesuada, quam quis euismod rutrum, erat arcu vulputate dui, sed euismod est justo at nisl. Sed at nunc nisl. Suspendisse vulputate purus sit amet luctus tincidunt. Nam luctus neque eros, et pulvinar enim finibus et. Aenean ut imperdiet odio. Ut a massa sapien. Sed nec ex metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi metus, luctus quis magna nec, iaculis pulvinar purus. Quisque eu tellus molestie orci elementum dictum et posuere ex.
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalGeneral;
