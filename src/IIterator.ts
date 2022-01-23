/**
 * interface defining the API for iterators.
 */
interface IIterator<T> {
  /**
   * check if the iterator has the next children
   * and return a boolean
   */
  hasNext() : boolean

  /**
   * return the next children of the iterator
   */
  next() : T


  getlist(): T[]
}

export default IIterator