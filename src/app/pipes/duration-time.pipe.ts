import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
   name: 'durationTime',
})
export class DurationTimePipe implements PipeTransform {
   transform(value: any): unknown {
      // convert millis to number if it's string;
      const mil = parseInt(value, 10)

      // get seconds;
      let sec = Math.floor(mil / 1000)

      // get hours;
      let hours = Math.floor(sec / 3600)

      // get minutes;
      let minutes = Math.floor((sec - hours * 3600) / 60)

      //  get seconds;
      let seconds = sec - hours * 3600 - minutes * 60

      let hh = hours.toString()
      if (hours < 10) {
         hh = '0' + hours
      }

      let mm = minutes.toString()
      if (minutes < 10) {
         mm = '0' + minutes
      }

      let ss = seconds.toString()
      if (seconds < 10) {
         ss = '0' + seconds
      }

      // Return is hh:mm:ss
      return hh + ':' + mm + ':' + ss
   }
}
