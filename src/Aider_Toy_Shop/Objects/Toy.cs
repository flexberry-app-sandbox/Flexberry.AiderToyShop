﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Aider_Toy_Shop
{
    using ICSSoft.STORMNET;


    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Toy.
    /// </summary>
    // *** Start programmer edit section *** (Toy CustomAttributes)

    // *** End programmer edit section *** (Toy CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ToyE", new string[] {
            "Name as \'Name\'",
            "Price as \'Price\'",
            "Color as \'Color\'"})]
    [View("ToyL", new string[] {
            "Name as \'Name\'",
            "Price as \'Price\'",
            "Color as \'Color\'"})]
    public class Toy : ICSSoft.STORMNET.DataObject
    {

        private string fColor;

        private string fName;

        private int fPrice;

        // *** Start programmer edit section *** (Toy CustomMembers)

        // *** End programmer edit section *** (Toy CustomMembers)


        /// <summary>
        /// Color.
        /// </summary>
        // *** Start programmer edit section *** (Toy.Color CustomAttributes)

        // *** End programmer edit section *** (Toy.Color CustomAttributes)
        [StrLen(255)]
        public virtual string Color
        {
            get
            {
                // *** Start programmer edit section *** (Toy.Color Get start)

                // *** End programmer edit section *** (Toy.Color Get start)
                string result = this.fColor;
                // *** Start programmer edit section *** (Toy.Color Get end)

                // *** End programmer edit section *** (Toy.Color Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Toy.Color Set start)

                // *** End programmer edit section *** (Toy.Color Set start)
                this.fColor = value;
                // *** Start programmer edit section *** (Toy.Color Set end)

                // *** End programmer edit section *** (Toy.Color Set end)
            }
        }

        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Toy.Name CustomAttributes)

        // *** End programmer edit section *** (Toy.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Toy.Name Get start)

                // *** End programmer edit section *** (Toy.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Toy.Name Get end)

                // *** End programmer edit section *** (Toy.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Toy.Name Set start)

                // *** End programmer edit section *** (Toy.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Toy.Name Set end)

                // *** End programmer edit section *** (Toy.Name Set end)
            }
        }

        /// <summary>
        /// Price.
        /// </summary>
        // *** Start programmer edit section *** (Toy.Price CustomAttributes)

        // *** End programmer edit section *** (Toy.Price CustomAttributes)
        public virtual int Price
        {
            get
            {
                // *** Start programmer edit section *** (Toy.Price Get start)

                // *** End programmer edit section *** (Toy.Price Get start)
                int result = this.fPrice;
                // *** Start programmer edit section *** (Toy.Price Get end)

                // *** End programmer edit section *** (Toy.Price Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Toy.Price Set start)

                // *** End programmer edit section *** (Toy.Price Set start)
                this.fPrice = value;
                // *** Start programmer edit section *** (Toy.Price Set end)

                // *** End programmer edit section *** (Toy.Price Set end)
            }
        }

        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {

            /// <summary>
            /// "ToyE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ToyE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ToyE", typeof(IIS.Aider_Toy_Shop.Toy));
                }
            }

            /// <summary>
            /// "ToyL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ToyL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ToyL", typeof(IIS.Aider_Toy_Shop.Toy));
                }
            }
        }
    }
}

