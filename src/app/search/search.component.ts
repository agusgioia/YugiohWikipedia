import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CardService } from '../card.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResults: any[] = [];
  selectedCard: any = null;
  query: string = '';

  constructor(private cardService: CardService) {}

  async search() {
    if (this.query.length > 2) { // Solo buscar si el input tiene más de 2 caracteres
      await this.handleSearch(this.query);
    } else {
      this.searchResults = [];
      this.selectedCard = null;
    }
  }

  async handleSearch(query: string) {
    try {
      this.searchResults = await this.cardService.getCards(query);
    } catch (error) {
      console.error('Error al buscar cartas:', error);
    }
  }

  selectCard(event: any) {
    const cardName = event.target.value;
    this.selectedCard = this.searchResults.find(card => card.name === cardName);
  }
}
