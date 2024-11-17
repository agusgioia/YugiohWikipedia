import { Component, OnInit } from '@angular/core';
import { AllCardsService } from './all-cards.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

interface Card {
  id: number;
  name: string;
  card_images: Array<{ image_url: string }>;
}

@Component({
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {
  cards: Card[] = [];
  currentPage: number = 1;
  pageSize: number = 12;

  constructor(private allCardsService: AllCardsService) { }

  ngOnInit(): void {
    this.loadAllCards();
  }

  async loadAllCards() {
    try {
      await this.allCardsService.fetchAllCards(); // Realiza una única petición
      this.updatePage();
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  }

  updatePage() {
    this.cards = this.allCardsService.getCards(this.currentPage, this.pageSize);
  }

  nextPage() {
    this.currentPage++;
    this.updatePage();
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }

  getCardImageUrl(cardId: number): string {
    return `https://images.ygoprodeck.com/images/cards_small/${cardId}.jpg`;
  }
}