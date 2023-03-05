<template>
  <form @submit.prevent="sendEmail">
    <input type="text" name="name" required v-model="name" />
    <input type="email" name="email" required v-model="email" />
    <textarea name="message" required v-model="message"></textarea>
    <button type="submit">Send Message</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { log } from '@/helpers'

const name = ref('')
const email = ref('')
const message = ref('')

const sendEmail = async () => {
  const response = await fetch('https://formspree.io/f/xnqkzqjy', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      access_key: process.env.VUE_APP_CONTACT_KEY,
      name: name.value,
      email: email.value,
      message: message.value,
    }),
  })
  if (response.ok) log('Email sent successfully')
  else log('Email failed to send', 'warning')
}
</script>

<style lang="scss" scoped>
.contact {
  h1 {
    text-align: center;
  }
  form {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
