import { Component, OnInit } from '@angular/core';
import { ArchetypeService } from './archetype.service';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from '../header/header.component';

interface Card {
  id: number;
  name: string;
  card_images: Array<{ image_url: string }>;
}

@Component({
  selector: 'app-archetype',
  templateUrl: './archetype.component.html',
  styleUrls: ['./archetype.component.css'],
  standalone:true,
  imports: [FormsModule, CommonModule, FooterComponent,HeaderComponent],
  providers:[ArchetypeService]
})



export class ArchetypeComponent implements OnInit {
  archetypes: any[] = [];
  selectedArchetype: string = '';
  cardNames: string = '';
  idCards: number[] = [];
  arquetypeCards: Card[] = [];

  constructor(private archetypeService: ArchetypeService) {}

  ngOnInit() {
    this.loadArchetypes();
  }

  loadArchetypes() {
    this.archetypeService.getArchetypes().subscribe({
      next: (data) => {
        console.log('Data received:', data); // Para depuración
        this.archetypes = data; // Asegúrate de que `data` tiene la estructura correcta
        console.log('Archetypes:', this.archetypes); // Verifica el contenido
      },
      error: (error) => {
        console.error('Error al cargar los arquetipos:', error);
      }
    });
  }
  

  onArchetypeChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedArchetype = target.value;
  }

  fetchArchetypeCards() {
    if (!this.selectedArchetype) {
      alert('Por favor selecciona un arquetipo.');
      return;
    }
  
    console.log('Arquetipo seleccionado:', this.selectedArchetype); // Para depuración
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${encodeURIComponent(this.selectedArchetype)}`;
  
    this.archetypeService.getArchetypeCards(this.selectedArchetype).subscribe({
      next: (data) => {
        console.log('Data received for cards:', data); // Para depuración
        if (Array.isArray(data.data) && data.data.length > 0) {
          this.cardNames = data.data.map((card: { name: string; }) => `<section>${card.name}</section>`).join('');
          this.idCards = data.data.map( (card:{id:number;}) => `<section>${card.id} </section>`);
          this.arquetypeCards = data.data;
        } else {
          this.cardNames = 'No se encontraron cartas para este arquetipo.';
        }
      },
      error: (error) => {
        console.error('Error al obtener las cartas:', error);
        this.cardNames = 'Hubo un error en la búsqueda.';
      }
    });
  }

  getCardImageUrl(cardId: number): string {
    return `https://images.ygoprodeck.com/images/cards_small/${cardId}.jpg`;
  }

}  