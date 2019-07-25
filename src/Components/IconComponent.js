import React from "react";
import PropTypes from "prop-types";

class IconComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  onClickButton = event => {
    const { onClick, value } = this.props;
    if (onClick) {
      onClick(event, value);
    }
  };

  render() {
    const { id, className, value } = this.props;
    return (
      <i
        id={id}
        className={className}
        data-value={value}
        onClick={this.onClickButton}
      />
    );
  }
}

IconComponent.propTypes = {
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,

  className: PropTypes.string.isRequired
};

IconComponent.defaultProps = {
  id: null,
  value: null,
  onClick: null
};

export default IconComponent;
