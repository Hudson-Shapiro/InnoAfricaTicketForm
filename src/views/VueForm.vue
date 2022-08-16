
<template>

  <div class="formContainer">

    <div class="title">
       <h1>Submit a ticket</h1>
    </div>

    <div class="formComponents">

      <p style="margin-bottom: 5px">  <b>Please choose a ticket type</b></p>
      <el-select style="margin-bottom: 20px; width: 25vw;color: black;" v-model="event.categories" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="option in categories"
          :key="option"
          :label="option"
          :value="option"
        />
      </el-select>

      <p style="margin-bottom: 5px">  <b>Ticket Subject</b></p>
      <el-input
        style="margin-bottom: 20px; width: 25vw; color: black;"
        v-model="event.Ticketinput"
        :rows="2"
        type="textarea"
        placeholder="Whats the main problem that needs resolving"
      />

      <p style="margin-bottom: 5px">  <b>Description</b></p>
      <el-input
        style="margin-bottom: 20px; width: 25vw;color: black;"
        v-model="event.DescriptionInput"
        :rows="7"
        type="textarea"
        placeholder="In a few sentences please describe your issue more in depth."
      />


      <p style="margin-bottom: 0px">  <b>Please rate the severity of your issue</b></p> 
       <el-rate
        style="margin-bottom: 10px" 
        v-model="event.rateValue"
        :texts="['not severe', 'somewhat severe', 'severe', 'very severe', 'extremely severe']"
        show-text
        :icons="icons"
        :void-icon="Rank"
        :colors="['#32a852', '#fc6514', '#c70000']"
        />


        <p style="margin-bottom: 5px">  <b>Documents</b></p> 


        <el-upload
        style="margin-bottom: 30px; width: 25vw; height: 16vh;color: black;"
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
      >
        <el-icon class="el-icon--upload" style="margin-bottom: 0px;height: 2vh;"><upload-filled /></el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png files with a size less than 500kb
          </div>
        </template>
      </el-upload>
      <el-button  style="margin-top: 30px; width: 14vh; background-color: #6078CE;;" size="large" @click="submit" type="primary">Submit</el-button>
       <el-button  style="margin-top: 30px; width: 14vh; background-color: #6078CE;;" size="large" @click="viewTickets" type="primary">View Ticket</el-button>
    </div>

  </div>

 
</template>

<script >
import { WarningFilled, Warning, Drizzling} from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import $ from "jquery";

export default {
  data() {
    return { 
      categories: [
        'Website Error' ,
        'App Error' ,
        'Engineering Issue',
        'Other'
      ],
      event: {
        Ticketinput: '',
        DescriptionInput: '',
        rateValue: '',
        category: '',
        title: '',
      },

      icons: [
        Drizzling,
        Warning, 
        WarningFilled
      ],

    }
  },



 methods: {
  submit() {
  var settings = {
    "url": "http://165.22.212.50:3000/api/v1/tickets",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "subject": "My First Ticket",
      "description": "I create my first ticket",
      "severity": "Severe",
      "status": "Pending"
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });


    this.$router.push('/TicketComplete');

    ElNotification({
    style: 'font-family: Helvetica Neue, Arial, sans-serif;',
    title: 'Success',
    message: 'Ticket Sucessfully Submitted',
    type: 'success',
  }) 
  },

  viewTickets () {
  var settings = {
    "url": "http://165.22.212.50:3000/api/v1/tickets",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  }
 }

}
</script>

<style>
.title {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3vh;
  margin-top: -2vh;
  margin-bottom: -1vh;

color: #6078CE;
}

.formContainer {
  margin-left: 7vw;
}

.formComponents{
  display: inline;
  justify-content: center;
  align-items: center;
}



</style>