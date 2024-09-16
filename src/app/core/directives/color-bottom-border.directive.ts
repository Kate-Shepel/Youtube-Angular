/* eslint-disable class-methods-use-this */
import {
  Directive, ElementRef, HostBinding, Input, OnInit
} from "@angular/core";

@Directive({
  selector: "[appColorBottomBorder]"
})
export class ColorBottomBorderDirective implements OnInit {
  @Input("appColorBottomBorder") element: string | undefined;

  private color: string;

  public defaultColor = "#E5E5E5";
  public month!: number;
  public SEVEN_DAYS = 7;
  public MONTH = 31;
  public SIX_MONTHS = 183;

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.fontWeight = "bold";
    this.color = this.defaultColor;
  }

  ngOnInit(): void {
    if (this.element) {
      const publicationDate = new Date(this.element);
      const currentDate = new Date();
      const daysDifference = Math.abs(publicationDate.getTime() - currentDate.getTime());
      this.month = Math.ceil(daysDifference / (1000 * 3600 * 24));
    } else {
      this.month = 0;
    }
  }

  @HostBinding("style.borderBottom") get colorBorder() {
    if (this.month < this.SEVEN_DAYS) {
      return "5px solid #2F80ED";
    } if (this.month < this.MONTH) {
      return "5px solid green";
    } if (this.month < this.SIX_MONTHS) {
      return "5px solid yellow";
    }
    return "5px solid red";
  }
}
