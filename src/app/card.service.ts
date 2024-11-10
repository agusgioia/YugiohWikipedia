import { Injectable } from '@angular/core';
import axios from 'axios';

interface Card {
  id: number;
  name: string;
  card_images: Array<{ image_url: string }>;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  async getCards(name: string): Promise<Card[]> {
    try {
      const response = await axios.get<{ data: Card[] }>(this.apiUrl, {
        params: { fname: name } // Utilizar 'fname' para buscar por fragmentos
      });
      return response.data.data;
    } catch (error) {
      console.error('Error fetching cards:', error);
      throw error;
    }
  }
}
