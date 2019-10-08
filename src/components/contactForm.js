import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
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
    padding: 2,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center"
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

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.ContactForm = React.createRef()
    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }
  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
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
    event.preventDefault()
    const form = this.ContactForm.current
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate("/"))
      .catch(error => alert(error))

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
            href="mailto:travision.dev@gmail.com"
          >
            putYourEmailHere@gmail.com
          </a>
        </h5>

        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          ref={this.ContactForm}
          className={classes.form}
        >
          {/* <input type="hidden" name="bot-field" /> */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="component-simple"
              type="text"
              name="name"
              value={name}
              onChange={this.handleNameChange}
              required
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="component-simple"
              type="email"
              name="email"
              value={email}
              onChange={this.handleEmailChange}
              required
            />
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="message">Message</InputLabel>
            <Input
              multiline
              name="message"
              rowsMax="4"
              id="component-simple"
              value={message}
              onChange={this.handleMessageChange}
              required
            />
          </FormControl>

          <Button
            size="medium"
            color="#343c42"
            variant="outlined"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactForm)
