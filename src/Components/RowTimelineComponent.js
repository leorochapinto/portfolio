import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import PropTypes from "prop-types";

class RowTimelineComponent extends React.Component {
  render() {
    const { date, icon } = this.props;
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={date}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={icon}
      >
        {this.props.children}
      </VerticalTimelineElement>
    );
  }
}

RowTimelineComponent.propTypes = {
  date: PropTypes.string,
  icon: PropTypes.string
};

RowTimelineComponent.defaultProps = {
  icon: null,
  date: null
};

export default RowTimelineComponent;
