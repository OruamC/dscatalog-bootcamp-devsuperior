import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '1',
        description: ''
    });

    type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: 'image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBEQDRAPDxAQEBAQEA0ODxAODw8TFxEXFhURExUYHSggGBolGxUVITEhJikrMTAvFx8zOjMsQyktLjABCgoKDQ0OFQ8PFTclHSUrLisrKy4sKzgrMzcsLS00KystNysvODg4Nys4LjgwLzErLystMDI3Mi8rKzctKystLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHCAL/xABHEAACAQMABAoECwUHBQAAAAAAAQIDBBEFEiExBgcTIkFRcXKRsTJhgaEjJDM0QlJzdKKysxQ1gpLBRGKTtNHh8BVTZKPC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERMf/aAAwDAQACEQMRAD8A62AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMHTGlaVrTVSu5KLkoLVjrNyabS9WyL3kPveMqMfkbG4ntxmpKnFdvwbmvFoCfA45ecZ+kJ/JRtaC1sJqM6ssdTc3GOezWNDe8KNI1tk7u5w5ZxTlGls7IRkmu9CPaXB3q5vKVJZrVKdNddScYebI/ecP9FU/wC0xq5bS5CMqscro10tVe1nC6sk2pTxJuWydRue19XKTST7kvYfajLKy5Zb6HPOPVqKEvHX/qMHVLrjYt4uOpa13FvfVnToNr+6m3reJsLTjM0fPCqq4t2/+7RbT7NXLfgcapRS9DKett5PMW93pKgk3/EilKCWFDZt2qniPVvVBx/EmB6FseElhX+Ru7eb+rykYy7MPDNonnatq61tR5lnhauvqva0tdUc+zPJJb+qTMqyvrilj9nrXFJt5xTrV1ntc4Sb9mEB6RBwqy4f6Up4+Mqab3XFOjNdiannxkbuw42Ln+0WlKp66M6tPC63rx8iDrQOf2vG1o9/L07ihje8U60fwS1vwk/TAqAAAAAAAAAAAAAAAAAAAAAiPGb8zp/eYfpVTnVzaVKeHUi45x/C9VS1ZdUtWUJYe3EovpOi8Z3zOH3mH6dQgmlNOTuKNGlKEI8kudOOc1pbcTkuiXOlnG/W7ErBrpvPpYljdrJSx2Z3GPO0pPfBLbl6raz2p5XuLuRkqMV2C3xnJPPStZ46k8rHgWHYTXoqElrZ1YvUyuuWcZNjkpkg1k6VRLbCTSnrLWhmK7GuaW6tbHpP6estZ6q9m5M2lZ82Xdl5EPSA2kr2KziXTn4OOrn1PcY87xdEc4eVrPOH2GIAq/K7n0ase7Ff1LM5t+k2+1tlABbrLmy7r8j1lDcuxHlKMctLraXvPVyIKgAAAAAAAAAAAAAAAAAAAAIjxnfMo/eaf5Khy3J1PjO+ZR+8U/yzOVZLEfWRk+Rko+sjJ85GQKVnzZd2XkRIldZ82Xdl5EVIoAAAAAuW658O/D8yPVbPK1p8pT+0h+ZHqqW9kFAAAAAAAAAAAAAAAAAAAAAET4zfmK+3peUjk51jjN+YP7el/wDRybJYiuQUyMlFQUyUyBSu+bLuy8iLkmrvmy7svIjJFAAAAAF+wWa1JddWkvxo9US3nlvRKzcW667igv8A2xPUjIAAAAAAAAAAAAAAAAAAAAACJ8ZvzB/bUv6nJDrnGb+75fbUvNnINfbjpwn7HnD9z8CwfYyfIyVH0UyUyAPmu+bLuy8iNkirPmy7svIjxFAAAAAGZoZfGrb71b/rRPUTPL+g18btfvVt+tA9QMgAAAAAAAAAAAAAAAAAAAAAIpxm/u+X21HzZxulW1pTj9Rpb9+Vk7Hxnfu+X2tH8xxO1fwtftp/lLBnZGT41hkqPrIyfORkD5rvmy7svI0Bvqz5su7LyNERVCoAAAqBm6BXxy0+92v68D0+zzFweWb2zX/mWn68D06QAAAAAAAAAAAAAAAAAAAMWGkreT1Y16EmnquMatNvPVjO8i3DzT0ox/ZbWaVSak61SLXwcFscM/Rk8+xdqOcwry1JUpYlTlhTpTjGUJJNNJp9TSfsLg6bxofu6f2tH8xw+2l8LX7af5Tomlb66rWfI3XyLdBqUcSqU04udJvP1lGWxyzs6NjIhbaAbqy1a9LFRw21FKlKGFh5W1P2MDE1hrGbpjQ1a1w6mrKm3hVqb1oZ6n0xfb7zW5CL2sVyWkz6TClZ82XdfkaU3FV82XdfkagChUAAAANlwaXx6x+/Wf8AmIHpo8zcGPn9h9/sv8zTPTJAAAAAAAAAAAAAAAAAMXSlyqVCtVlLUVOlOWtjOMReHjpeegyiD8aukuTtqdCLw689aXchtx/M4eDA5XX01Vtqq/YHKDkpKo6urz4zWJppvn+t9aLsa66XtbSUemXXjsW011eO3WSy+rOPai9QuM/Raxt1Z9WXjLWOp7Sokl9p6vXo0aNRwVOiowhqQ1NZpS1XN/Slhz6t7frLVhShOpGNaqqEJYfKzg5pJvCajlZWc7crc+o1ltY1Kji9XnJbNsorbs2J7OlJN9eOk2l1C5uKTua8oulbqFrycpar21N8ab2ZzOKeMLmrC2YS86MW8rqpQbhJuDyovDipxTaTcXuzvw92SHTvZQ2bNm7K9xL9K3kKjxQochTjSSktec9aed61m+jqwvUQe89LZ1494asy43VKrrJMupmBaT2Iy4sIuVHzZd1+RqjZ1HzZdj8jWAAAABUAZ2ga3J3dtUxnk7mhUS63CpGS8judjw2oy2VYSg+tbUcFsH8LT+0h+ZExp1iDs1rpW3q+hVi/U3h+8zEcXpV2tza7NhtbLTtxT9CpLHU3lAdUBCbPhpNbKsFL1rYzd2nCe2qb5OD6pAbsFqjcQn6E4y7Gi6AAAAAAAAAON8ad9r38oZ2UadOnj1ta7/P7jshwrjKpunpK5cs4k4VE30xdKP8AVNewCPwnBbaik0luhnPgWLVvXc5ZSbilHZlRX+7k/aay4vpp7Hj1bGjpuiOLS5r2dCu60KVerDlJW1WnJRipPME5rLi9XDa1XteOgoiVbTlS2qNWEpQjOMoVeUwnUpzS1lqt7VsTz6irvpVG5Nvn4coqTUZPMXlrc9sYv2IvcIeCN7Z8+6patPKXLQnCdNtvC3PK29aRqoSwBm1amxkbufTXeRup1NhpLzfnqeQMq3ZmU2YFF7TLpsC/N819j8jXmdJ7H2PyMEAAVAAAC9afKQ78fMklOoRm2lz495eZvYTINlCqX4VTW0pNtJbW9yW1vsJFozgtfVsONGVOL+nW+DXg9r8AMWNUuRqEv0dxfpYdzXb64UVhfzS/0JLYaAtKPydGOfrT58veBAdGWd5PDoQqY+ttUfF7CaaJsr6KXLVo4+rjXZvUAPnD6/cD6AAAAAAAILxqcGKl5bxq2lF1bqk1HEZRg5Utraw/Sw8NLOdst+4nQA8r/wDS7i3qa93RrUnCSaVWlUpx1k8p5mkmbqpwkuqu2d1czz13FVrwzg9Hf8wajSvBiwuvnFrRm8Y5RR5OquypDEl4ged7mannW2t9Le3xLNKT3Po9eco61pfijoyzKyuZ0n0Uq8VVh2KSxJe3WIPpngLpO0TlO35WEct1bWXLxS63HCmv5QI9KZr7vpMxyTWVtXiY845KPihLd2GdTMGnaVMpQXKNtKMYp68m3hRiulvqNncWtW3lqXVKrbTzjVuKcqWe65LEvYwKRnlS2bsrt3mIZ3JpRk10pvzMBPr9+wCpUyNG6PuLqWraUK1w84+CpylGL/vS3R9pNdD8U2kKuHdVKNnF45q+MVvWsJqK/mYECbL2j7StcS1LWjVuJ9MaNOVTHea2L2nb9D8V2i6GJVYTvJr6V1LWh/hxxHxTJjb28KcVClCFOC3QpxUIrsS2EHFdB8V+kamJ3EaNruaVSrylRdsKaa/ETfRfFpa08O5q1biXTFfAU/BNy/ETgAYWj9E21usW9GnS9cIrWfbLezNAAAAAAAAAAAAAAAAAAAAAAAIpp/i90beSlUnTnQqz9Ktaz5Jyf1pRacW/XjJH4cTNknn9rvfG3b8XTOlgCP8AB7gZYWLU6FJyqpY5etLlKi2Yer0R/hSN5cUIVIuFWEKkHscKkVOL7U9jLgAhuluLPRdfLp06lnJ/StJ8nH/DeYeCRTRHFjoq3alOlK6klvu5KpF+t00lB+1MmYA+KVKMIqMIxhFboxSjFdiR9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=',
            categories: [{ id: formData.category }]
        }

        makeRequest({ url: '/products', method: 'POST', data: payload })
            .then(() => {
                setFormData({ name: '', category: '', price: '', description: '' })
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <input
                            value={formData.name}
                            name="name"
                            type="text"
                            className="form-control mb-5"
                            onChange={handleOnChange}
                            placeholder="Nome do produto"
                        />
                        <select 
                            value={formData.category}
                            className="form-control mb-5" 
                            onChange={handleOnChange}
                            name="category"
                        >
                            <option value="1">Livros</option>
                            <option value="3">Computadores</option>
                            <option value="2">Eletrõnicos</option>
                        </select>
                        <input
                            value={formData.price}
                            name="price"
                            type="text"
                            className="form-control"
                            onChange={handleOnChange}
                            placeholder="Preço"
                        />
                    </div>
                    <div className="col-6">
                        <textarea 
                            value={formData.description}
                            onChange={handleOnChange}
                            name="description" 
                            className="form-control"
                            cols={30} 
                            rows={10} 
                        />
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default Form;