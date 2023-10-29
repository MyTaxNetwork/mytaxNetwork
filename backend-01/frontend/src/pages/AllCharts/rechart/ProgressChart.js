import React from "react"
import _progress_chart.scss from "assets/scss/custom/pages/progress-chart.scss"
const ProgressBar = (props) => {
  values = [
  "one",
  "two",
  "three",
  "complete",
]
     return(
        <div
  id="app"
  class="progressClasses"
>
  <div class="progress__bg"></div>
  for ([i , label] of values.entries()){
    <div :class="stepClasses(i)">
      <div class="progress__indicator">
        <i class="fa fa-check"></i>
      </div>
      <div class="progress__label">
        {{label}}
      </div>
    </div>
  }

 
  
  <div class="progress__actions">
    <div
      class="btn"
      v-on:click="nextStep(false)"
    >
      Back
    </div>
    <div
      class="btn"
      v-on:click="nextStep"
    >
      Next
    </div>
    <div>
      Step:
      {{currentStep ? currentStep.label : "Start"}}
    </div>
  </div>
</div>
     )
}

export default ProgressBar;