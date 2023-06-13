/**
 * @description:
 * @author: wxingheng
 * @Date: 2023-06-13 16:08:46
 * @param {*} private
 * @param {*} private
 * @return {*}
 * @example:
 */

export class Typewriter {
  private queue: string[] = []
  private consuming = false
  private timer: any
  private strTemp = ''
  constructor (
    private onConsume: (str: string) => void,
    private onDone: (str: string) => void
  ) {}
  dynamicSpeed () {
    const speed = 2000 / this.queue.length
    if (speed > 200) {
      return 200
    } else {
      return speed
    }
  }
  add (str: string) {
    if (!str) return
    this.queue.push(...str.split(''))
  }
  consume () {
    if (this.queue.length > 0) {
      const str = this.queue.shift()
      if (str) {
        this.strTemp += str
        this.onConsume(this.strTemp)
      }
    }
  }
  next () {
    this.consume()
    this.timer = setTimeout(() => {
      this.consume()
      if (this.consuming) {
        this.next()
      }
    }, this.dynamicSpeed())
  }
  start () {
    this.consuming = true
    this.next()
  }
  done () {
    this.consuming = false
    clearTimeout(this.timer)
    this.strTemp += this.queue.join('')
    this.onConsume(this.strTemp)
    this.onDone(this.strTemp)
    this.queue = []
  }
}
