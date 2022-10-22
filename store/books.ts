import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Book } from '@/models'
import { $axios } from '~/utils/api'

interface Show {
  id: Book['id']
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as Book[]
  private book = {} as Book

  //  GETTERS ################
  public get $all() {
    return this.books
  }

  public get $single() {
    return this.book
  }

  // MUTATIONS ################
  @Mutation
  private SET_SINGLE(book: Book) {
    this.book = book
  }

  @Mutation
  private SET_ALL(books: Book[]) {
    this.books = books
  }

  // ACTIONS ################
  @Action
  public async index() {
    const books = await $axios.$get('/books')

    this.context.commit('SET_ALL', books)
  }

  @Action
  public async show({ id }: Show) {
    const book = await $axios.$get(`/books/${id}`)

    this.context.commit('SET_SINGLE', book)
  }
}
