import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AllCardsService {
  private API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  constructor() { }

  async getAllCards(page: number = 1) {
    const offset = (page - 1) * 12;
    try {
      const response = await axios.get(this.API_URL, {
        params: { num: 12, offset }
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
      throw error;
    }
  }
}
