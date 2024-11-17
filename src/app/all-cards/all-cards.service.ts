import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AllCardsService {
  private API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  private allCards: any[] = [];

  constructor() { }

  async fetchAllCards() {
    try {
      const response = await axios.get(this.API_URL);
      this.allCards = response.data.data;
      console.log(this.allCards);
      return this.allCards;
    } catch (error) {
      console.error('Error fetching cards:', error);
      throw error;
    }
  }

  getCards(page: number = 1, pageSize: number = 12) {
    const offset = (page - 1) * pageSize;
    return this.allCards.slice(offset, offset + pageSize);
  }
}
