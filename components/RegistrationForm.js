const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
      <input type="text" />
      <input type="password" />
      <button type="submit"></button>
      </form>
    )

  }
}

module.exports = RegistrationForm;

// return React.createElement('form', {}, [
//   React.createElement('input', {type: 'text'}),
//   React.createElement('input', {type: 'password'}),
//   React.createElement('button', {type: 'submit'})
// ])
