<template>
  <base-section title="Contact Me" name="contact">
    <div class="form-wrapper">
      <form v-show="showForm" class="form" ref="contactForm">
        <div class="line-wrapper">
          <input
            v-model="name"
            :disabled="formSending"
            type="text"
            :class="`line-input ${name ? 'line-input--filled' : ''} ${errorName ? 'error' : ''}`"
            id="name"
            name="name"
          />
          <label class="line-label" for="name">Name</label>
          <div class="line-error">{{ errorName }}</div>
        </div>

        <div class="line-wrapper">
          <input
            v-model="email"
            :disabled="formSending"
            type="email"
            :class="`line-input ${email ? 'line-input--filled' : ''} ${errorEmail ? 'error' : ''}`"
            id="email"
            name="email"
          />
          <label class="line-label" for="email">Email</label>
          <div class="line-error">{{ errorEmail }}</div>
        </div>

        <div class="line-wrapper">
          <textarea
            v-model="message"
            :disabled="formSending"
            rows="5"
            :class="`line-input ${message ? 'line-input--filled' : ''} ${errorMessage ? 'error' : ''}`"
            id="message"
            name="message"
          ></textarea>
          <label class="line-label" for="message">Message</label>
          <div class="line-error">{{ errorMessage }}</div>
        </div>

        <div class="line-wrapper">
          <div class="line-input-submit">
            <button type="submit" name="submit" class="submit" :disabled="!canSend || formSending" @click="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div v-show="formFail" class="form-error">
        <p>Hmmm, something went wrong...</p>
        <p>Would you mind sending me an email instead?</p>
        <div>
          <a class="form-error-email" href="mailto:contact@chisnall.io">contact@chisnall.io</a>
          <img class="form-error-do-it" src="../assets/img/do it.png" alt="NVM" />
        </div>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from './BaseSection'
import rules from '@/ui/assets/rules'

const sanitize = v => v.trim().replace(/ {2,}/g, ' ')

export default {
  name: 'Contact',
  components: { BaseSection },
  props: ['value'],
  data: () => ({
    showForm: true,
    formFail: false,
    formSending: false,
    rules,
    name: '',
    email: '',
    phone: '',
    message: ''
  }),
  computed: {
    canSend() {
      if (!sanitize(this.name) || this.errorName) return false
      if (!sanitize(this.email) || this.errorEmail) return false
      if (!sanitize(this.message) || this.errorMessage) return false
      return true
    },
    errorName() {
      const v = sanitize(this.name)
      const err = [rules.name, rules.min3, rules.max20].find(f => f(v) !== true)
      return err ? err(v) : null
    },
    errorEmail() {
      const v = sanitize(this.email)
      const err = [rules.email].find(f => f(v) !== true)
      return err ? err(v) : null
    },
    errorMessage() {
      const v = sanitize(this.message)
      const err = [rules.min20, rules.max200].find(f => f(v) !== true)
      return err ? err(v) : null
    }
  },
  methods: {
    submit() {
      this.formSending = true
      fetch('https://hooks.zapier.com/hooks/catch/3615161/g8cllk/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify({
          name: sanitize(this.name),
          email: sanitize(this.email),
          message: sanitize(this.message)
        })
      })
        .then(() => this.$notify('success', 'Message sent!'))
        .then(() => (this.showForm = false))
        .catch(e => {
          this.$notify('error', e.message)
          this.formFail = true
          this.showForm = false
        })
        .finally(() => (this.formSending = false))
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrapper {
  margin: 30px auto;
}
.form {
  max-width: 500px;
  margin: 0 20px;
}
.line-wrapper {
  position: relative;
  margin-bottom: 10px;
  width: 100%;
  &:last-of-type {
    margin-top: 20px;
    text-align: center;
  }
}
.line-input {
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  outline-style: none;
  overflow: hidden;
  color: #555;
  font-size: 20px;
  border: 1px solid #ccc;
  transition: all 0.3s ease-in-out;
  &.error {
    background: rgba(255, 67, 54, 0.1);
    ~ .line-error {
      max-height: 25px;
    }
    ~ .line-label {
      color: red;
    }
  }
}
.line-label {
  position: absolute;
  top: 20px;
  left: 20px;
  pointer-events: none;
  color: #999;
  transition: all 0.3s ease-in-out;
}
.line-input:focus,
.line-input--filled {
  padding: 30px 20px 10px 20px;
  ~ .line-label,
  .line-label {
    top: 5px;
    left: 10px;
  }
}
.line-error {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-in-out;
  color: red;
  font-size: 16px;
  height: 25px;
}
.submit {
  height: 50px;
  width: 200px;
  font-size: 25px;
  border: 2px outset dodgerblue;
  background-color: dodgerblue;
  transition: all 0.3s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:disabled {
    color: #bbb;
    background-color: #eee;
    border: none;
    cursor: not-allowed;
  }
}
.form-error {
  position: relative;
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
  background: rgb(255, 227, 174);
  border: orange outset 4px;
  color: orangered;
  border-radius: 10px;
  padding: 20px;
  font-size: 20px;
}
.form-error-email {
  color: dodgerblue;
  padding: 20px;
  margin-left: -20px;
  &:hover ~ .form-error-do-it {
    transform: translateX(0);
  }
}
.form-error-do-it {
  max-height: 100%;
  position: absolute;
  right: 0;
  transform: translateX(100%);
  bottom: 0;
  transition: all 3s linear;
}
@media screen and (max-width: 400px) {
  .form-error-do-it {
    display: none;
  }
}
</style>
