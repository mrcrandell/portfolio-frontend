<template>
  <section id="contact" class="page">
    <h1>Contact</h1>
    <form method="post" @submit.prevent="submitForm($event)">
      <div
        v-if="alert.show"
        class="alert"
        role="alert"
        :class="'alert-' + alert.status"
      >
        {{ alert.message }}
      </div>
      <div class="form-group">
        <label for="contact-name">Name</label>
        <input
          id="contact-name"
          v-model="name"
          type="text"
          class="form-control"
          name="name"
          :class="{ 'is-invalid': errors.name }"
          placeholder="Name"
        />
        <template v-if="errors.name">
          <div
            v-for="message in errors.name.messages"
            :key="message"
            class="invalid-feedback"
          >
            {{ message }}
          </div>
        </template>
      </div>
      <div class="form-group">
        <label for="contact-email">Email</label>
        <input
          id="contact-email"
          v-model="email"
          type="email"
          class="form-control"
          name="email"
          :class="{ 'is-invalid': errors.email }"
          placeholder="Email"
        />
        <template v-if="errors.email">
          <div
            v-for="message in errors.email.messages"
            :key="message"
            class="invalid-feedback"
          >
            {{ message }}
          </div>
        </template>
      </div>
      <div class="form-group">
        <label for="message-text">Name</label>
        <textarea
          id="message-text"
          v-model="message_text"
          name="message_text"
          class="form-control"
          rows="6"
          :class="{ 'is-invalid': errors.message_text }"
          placeholder="Enter Message"
        ></textarea>
        <template v-if="errors.message_text">
          <div
            v-for="message in errors.message_text.messages"
            :key="message"
            class="invalid-feedback"
          >
            {{ message }}
          </div>
        </template>
      </div>
      <div class="form-group">
        <small
          >This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and
          <a href="https://policies.google.com/terms">Terms of Service</a>
          apply.
        </small>
      </div>
      <div class="form-group form-group-submit">
        <button
          type="submit"
          class="btn btn-submit btn-primary"
          :disabled="isLoading"
        >
          <transition name="slide-fade" mode="out-in">
            <span :key="submitText">{{ submitText }}</span>
          </transition>
        </button>
      </div>
    </form>
  </section>
</template>
<script>
/* let grecaptcha = null
if (process.browser) {
  grecaptcha = window.grecaptcha
} */
export default {
  data() {
    return {
      alert: {
        show: false,
        status: '',
        message: '',
      },
      name: '',
      email: '',
      message_text: '',
      recaptcha_token: '',
      errors: {},
      isLoading: false,
      submitText: 'Submit',
      reCAPTCHASiteKey: process.env.APP_URL,
    }
  },
  async mounted() {
    /* const recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute(
      'src',
      `https://www.google.com/recaptcha/api.js?render=${this.reCAPTCHASiteKey}`
    )
    document.head.appendChild(recaptchaScript) */
    try {
      await this.$recaptcha.init()
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
  methods: {
    async submitForm(event) {
      // eslint-disable-next-line
      // console.log(this.$recaptcha.ready())
      if (this.validateForm()) {
        // eslint-disable-next-line
        // console.log(event)

        try {
          const token = await this.$recaptcha.execute('contact')
          // Reset Errors
          // this.errors = {}
          // eslint-disable-next-line
          console.log('ReCaptcha token:', token)

          // send token to server alongside your form data
          const contactData = {
            name: this.name,
            email: this.email,
            message_text: this.message_text,
            recaptcha_token: token,
          }
          // this.contact.recaptcha_token = token
          this.isLoading = true
          this.submitText = 'Sending...'
          await this.$axios
            .post('/api/contact', contactData)
            .then((response) => {
              // eslint-disable-next-line
              console.log(response.data)
              this.submitText = 'Send'
              this.isLoading = false
              this.alert.show = true
              this.alert.status = 'success'
              this.alert.message = response.data.success_message
              this.clearForm()
            })
            .catch((error) => {
              this.submitText = 'Send'
              this.isLoading = false
              this.alert.show = true
              this.alert.status = 'danger'
              this.alert.message =
                'Please correct the errors in red on the form.'
              const errors = error.response.data.errors
              for (const property in errors) {
                this.errors[property] = {}
                this.errors[property].messages = []
                for (let index = 0; index < errors[property].length; index++) {
                  this.errors[property].messages.push(errors[property][index])
                }
              }
            })
        } catch (error) {
          // eslint-disable-next-line
          console.log('Contact form error:', error)
        }
      } else {
        // Invalid
        this.alert.show = true
        this.alert.status = 'danger'
        this.alert.message = 'Please correct the errors in red on the form.'
      }
    },
    validateForm() {
      this.errors = {}
      if (this.name === '') {
        this.errors.name = {}
        this.errors.name.messages = []
        this.errors.name.messages.push('Please enter your name')
      }
      if (this.email === '') {
        this.errors.email = {}
        this.errors.email.messages = []
        this.errors.email.messages.push('Please enter your email')
      }
      if (this.message_text === '') {
        this.errors.message_text = {}
        this.errors.message_text.messages = []
        this.errors.message_text.messages.push('Please enter a message.')
      }

      return Object.keys(this.errors).length === 0
    },
    clearForm() {
      this.name = ''
      this.email = ''
      this.message_text = ''
      this.recaptcha_token = ''
      this.errors = {}
      this.isLoading = false
    },
  },
}
</script>