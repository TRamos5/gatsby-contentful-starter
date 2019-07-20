import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import Button from "@material-ui/core/Button"

const styles = theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 5,
  },
  formControl: {
    margin: theme.spacing.unit,
    width: "20%",
  },
  contact: {
    fontSize: "2rem",
    lineHeight: 1.2,
    marginBottom: ".5rem",
    marginTop: 0,
  },
  emailLink: {
    textDecoration: "none",
    paddingTop: "2%",
    hover: {
      textDecoration: "underline",
    },
  },
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  componentDidMount() {
    this.forceUpdate()
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value })
  }
  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }
  handleMessageChange = event => {
    this.setState({ message: event.target.value })
  }
  handleSubmit = event => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    event.preventDefault()

    this.setState({
      name: "",
      email: "",
      message: "",
    })
  }

  render() {
    const { classes } = this.props
    const { name, email, message } = this.state

    return (
      <div className={classes.container}>
        <h3 className={classes.contact}>CONTACT</h3>
        <h5>
          <a
            className={classes.emailLink}
            href="mailto:travis.ramos1@gmail.com"
          >
            travis.ramos1@gmail.com
          </a>
        </h5>

        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              Message
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleMessageChange}
                rows="6"
                required
              />
            </label>
          </div>
          <div>
            <button type="submit" onClick={this.handleSubmit}>Send</button>
          </div>
          {/* <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" value={this.state.name} onChange={this.handleNameChange} />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <Input id="component-simple" value={this.state.email} onChange={this.handleEmailChange} />
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="component-simple">Message</InputLabel>
          <Input multiline
          rowsMax="4" id="component-simple" value={this.state.message} onChange={this.handleMessageChange} />
        </FormControl> */}

          {/* <Button
            size="medium"
            color="#343c42"
            variant="outlined"
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </Button> */}
        </form>
      </div>
    )
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactForm)
