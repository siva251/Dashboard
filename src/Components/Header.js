import React from 'react';
import Text from './Text';
import UserImage from './UserImage';

class Header extends React.Component {
  state = {
    components: [
        {"Component":"Text",
            "InputType":"text",
        "ClassName":"HeaderSearch",
        "PlaceHolder":"Search"},
        {"Component":"Image",
        "alt":"UserLogin",
        "ClassName":"userLogo",
        "src":"data:image/png;base64,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"
        },
        {"Component":"Image",
            "alt":"UserLogin",
            "ClassName":"userLogo2",
            "src":"data:image/png;base64,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"
            },
            {"Component":"Image",
                "alt":"UserLogin",
                "ClassName":"userLogo3",
                "src":"data:image/png;base64,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"
                }
    ]
  };


  renderComponent = (component, index) => {
    const { Component, ClassName, InputType } = component;
    if (Component === 'Image') {
      return <UserImage key={index} className={ClassName} {...component}/>;
    } else if (Component === 'Text') {
      return <Text key={index} className={ClassName} inputType={InputType} />;
    }
    return null;
  };

  render() {
    return (
      <div className='header'>
        {this.state.components.map((component, index) => (
          this.renderComponent(component, index)
        ))}
      </div>
    );
  }
}

export default Header;
